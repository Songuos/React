import React, { useState } from 'react';
import './FileUpload.css';

function FileUpload() {
    const [taskId, setTaskId] = useState(null);
    const [status, setStatus] = useState(null);
    const [downloadLink, setDownloadLink] = useState(null);
    const [file, setFile] = useState(null);
    const [totalAmount, setTotalAmount] = useState(0);
    const [processedAmount, setProcessedAmount] = useState(0);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const uploadFile = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('http://localhost:3001/api/upload', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();
        setTaskId(result.taskId);
        setFile(null);

        // 开始轮询检查文件处理状态
        checkStatus(result.taskId);
    };

    const checkStatus = async (taskId) => {
        const intervalId = setInterval(async () => {
            const response = await fetch(`http://localhost:3001/api/status/${taskId}`);
            const result = await response.json();
            setStatus(result.status);
            setTotalAmount(result.totalAmount);
            setProcessedAmount(result.processedAmount);

            if (result.status === 'completed') {
                setDownloadLink(`http://localhost:3001/api/download/${taskId}`);
                setProcessedAmount(result.totalAmount); // 确保进度条到达100%
                clearInterval(intervalId);
                // alert('File processing completed. You can now download the result.');
            }
        }, 500); // 每隔0.5秒检查一次状态
    };

    return (
        <div className="file-upload-container">
            <form id="uploadForm" onSubmit={uploadFile} encType="multipart/form-data" className="upload-form">
                <div className="upload-box">
                    <input type="file" id="fileInput" accept=".csv, .xls, .xlsx" className="file-input" onChange={handleFileChange} />
                    <div className="upload-placeholder">
                        <div className="upload-icon">⬆️</div>
                        <div className="upload-text">点击上传或拖动文件到此</div>
                    </div>
                </div>
                <div className="button-container">
                    <button type="submit" className="upload-button" disabled={!file}>上传提交</button>
                    <a id="downloadLink" href={downloadLink} download="result.xlsx" className="download-button" style={{ display: downloadLink ? 'block' : 'none' }}>下载结果</a>
                </div>
            </form>
            {status && (
                <div className="status-container">
                    <p className="status-text">Status: {(processedAmount / totalAmount) * 100}%</p>
                    {status === 'processing' && (
                        <div className="progress-bar">
                            <div className="progress" style={{ width: `${(processedAmount / totalAmount) * 100}%` }}></div>
                        </div>
                    )}
                    {status === 'completed' && (
                        <div className="progress-bar">
                            <div className="progress" style={{ width: '100%' }}></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default FileUpload;