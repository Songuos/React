import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // 定义一个变量selectedFile，用来存储用户选择的文件
  const [selectedFile, setSelectedFile] = useState(null);
  // 定义一个变量uploadProgress，用来存储文件上传进度
  const [uploadProgress, setUploadProgress] = useState(0);
  // 定义一个变量fileId，用来存储文件上传后的id
  const [fileId, setFileId] = useState(null);
  // 定义一个变量processingProgress，用来存储文件处理进度
  const [processingProgress, setProcessingProgress] = useState(0);

  // 当用户选择一个文件时，将selectedFile设置为选中的文件
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // 定义一个函数onFileUpload，用于上传文件
  const onFileUpload = () => {
    // 创建一个FormData对象
    const formData = new FormData();
    // 将选中的文件添加到FormData中
    formData.append('file', selectedFile);

    // 发送POST请求，将文件上传到服务器
    axios.post('http://localhost:5001/upload', formData, {
      onUploadProgress: progressEvent => {
        // 设置上传进度
        setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
      }
    })
      .then(response => {
        // 设置fileId
        setFileId(response.data.fileId);
      })
      .catch(error => {
        console.error('There was an error uploading the file!', error);
      });
  };

  // 使用useEffect来监听fileId的变化，如果fileId有值，则每1000毫秒向服务器获取一次处理进度
  useEffect(() => {
    if (fileId) {
      const interval = setInterval(() => {
        // 发送GET请求，获取处理进度
        axios.get(`http://localhost:5001/progress/${fileId}`)
          .then(response => {
            // 设置处理进度
            setProcessingProgress(response.data.progress);
            // 如果处理进度达到100，则清除定时器
            if (response.data.progress >= 100) {
              clearInterval(interval);
            }
          })
          .catch(error => {
            console.error('Error fetching progress:', error);
            clearInterval(interval);
          });
      }, 1000);
    }
  }, [fileId]);

  return (
    <div className="App">
      <h2>File Upload and Processing Demo</h2>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload!</button>
      {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      {fileId && <p>Processing Progress: {processingProgress}%</p>}
    </div>
  );
}

export default App;