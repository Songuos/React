const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());

let fileProcessingStatus = {};

app.post('/upload', upload.single('file'), (req, res) => {
    const fileId = Date.now().toString();
    fileProcessingStatus[fileId] = 0; // 初始化进度

    // 模拟文件处理过程
    setTimeout(() => {
        const interval = setInterval(() => {
            if (fileProcessingStatus[fileId] < 100) {
                fileProcessingStatus[fileId] += 10; // 每次增加10%的进度
            } else {
                clearInterval(interval);
            }
        }, 1000); // 每秒更新一次进度
    }, 1000);

    res.status(200).json({ fileId });
});

app.get('/progress/:fileId', (req, res) => {
    const fileId = req.params.fileId;
    const progress = fileProcessingStatus[fileId] || 0;
    res.status(200).json({ progress });
});

const PORT = 5001;  // 更改这里的端口号
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});