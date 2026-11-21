
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    width: 100%;
    max-width: 600px;
}

.todo-box {
    background: #ffffff;
    padding: 35px;
    border-radius: 18px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.2);
}

header {
    text-align: center;
    margin-bottom: 30px;
}

header h1 {
    color: #252b48;
    font-size: 30px;
    margin-bottom: 10px;
}

header p {
    color: #777;
    font-size: 14px;
}

.input-area {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.input-area input {
    flex: 1;
    padding: 14px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
    font-size: 15px;
    min-width: 0;
}

.input-area input:focus {
    border-color: #667eea;
}

.input-area button {
    background: #667eea;
    color: white;
    border: none;
    padding: 14px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.input-area button:hover {
    background: #5365d8;
}

.task-stats {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background: #f5f6ff;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 22px;
    color: #555;
    font-size: 13px;
}

.task-stats b {
    color: #667eea;
}

.filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.filter-btn {
    padding: 9px 16px;
    border: none;
    border-radius: 20px;
    background: #f0f0f0;
    color: #555;
    cursor: pointer;
}

.filter-btn.active {
    background: #667eea;
    color: white;
}

#taskList {
    list-style: none;
}

.task-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px;
    border-bottom: 1px solid #eee;
}

.task-item span {
    flex: 1;
    color: #333;
    overflow-wrap: anywhere;
}

.task-item.completed span {
    text-decoration: line-through;
    color: #999;
}

.task-item input {
    width: 18px;
    height: 18px;
    cursor: pointer;
    accent-color: #667eea;
}

.delete-btn {
    background: #ffe8e8;
    color: #e74c3c;
    border: none;
    padding: 8px 12px;
    border-radius: 6px;
    cursor: pointer;
}

.delete-btn:hover {
    background: #ffd3d3;
}

#emptyMessage {
    text-align: center;
    color: #999;
    padding: 25px 0;
    font-size: 14px;
}

footer {
    margin-top: 20px;
    text-align: right;
}

#clearCompleted {
    background: transparent;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    font-size: 14px;
}

@media (max-width: 480px) {
    .todo-box {
        padding: 22px 16px;
    }

    header h1 {
        font-size: 25px;
    }

    .task-stats {
        flex-wrap: wrap;
    }

    .input-area button {
        padding: 12px;
    }

    .filter-btn {
        padding: 8px 12px;
        font-size: 12px;
    }
}
