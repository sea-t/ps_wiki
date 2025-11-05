# Java & AI 工程师技能学习路线图

> 最后更新：2025年
>
> 本文档整理了Java工程师和AI工程师应该具备的核心技能、学习路线以及Linux运维基础知识，帮助你系统化地规划学习路径。

---

## 目录

- [一、Java工程师技能树与学习路线](#一java工程师技能树与学习路线)
  - [1.1 学习阶段规划](#11-学习阶段规划)
  - [1.2 核心技能树](#12-核心技能树)
  - [1.3 进阶技术栈](#13-进阶技术栈)
- [二、AI工程师技能树与学习路线](#二ai工程师技能树与学习路线)
  - [2.1 学习阶段规划](#21-学习阶段规划)
  - [2.2 核心技能树](#22-核心技能树)
  - [2.3 深度学习框架](#23-深度学习框架)
- [三、Linux运维基础知识](#三linux运维基础知识)
  - [3.1 必备技能](#31-必备技能)
  - [3.2 常用命令](#32-常用命令)
- [四、DevOps与云原生技术](#四devops与云原生技术)
- [五、学习资源推荐](#五学习资源推荐)

---

## 一、Java工程师技能树与学习路线

### 1.1 学习阶段规划

#### 阶段一：Java基础（4-8周）

**核心内容：**
- Java语言基础
  - 数据类型、运算符、流程控制
  - 面向对象编程（OOP）：封装、继承、多态
  - 异常处理机制
  - 集合框架（List、Set、Map）
  - 泛型、注解、反射
  - I/O流与NIO
  - 多线程与并发基础

**开发环境：**
- JDK 21+ 安装与配置
- IntelliJ IDEA 2025 开发环境搭建
- Maven/Gradle 项目管理工具

**学习目标：**
- 掌握Java语法和面向对象编程思想
- 能够独立编写基础Java程序
- 理解Java集合框架和常用API

---

#### 阶段二：Java进阶（6-10周）

**核心内容：**
- Java高级特性
  - Lambda表达式与Stream API
  - Optional类使用
  - 函数式编程
  - Java 21新特性：
    - 虚拟线程（Virtual Threads）
    - 密封类（Sealed Classes）
    - 模式匹配
    - 记录类（Record）

- JVM深入理解
  - JVM内存模型
  - 垃圾回收机制（GC）
  - 类加载机制
  - JVM性能调优

- 并发编程
  - 线程安全与同步
  - Lock与Condition
  - 并发工具类（CountDownLatch、CyclicBarrier等）
  - 线程池原理与应用
  - CompletableFuture异步编程

**学习目标：**
- 深入理解JVM运行原理
- 掌握Java并发编程
- 能够进行性能分析和优化

---

#### 阶段三：数据库与持久层（2-3周）

**核心内容：**
- 关系型数据库
  - MySQL基础与高级查询
  - 索引原理与优化
  - 事务与锁机制
  - SQL性能优化

- 持久层框架
  - JDBC核心API
  - MyBatis框架
  - Spring Data JPA
  - Hibernate 6

- NoSQL数据库
  - Redis缓存技术
  - MongoDB文档数据库
  - Elasticsearch搜索引擎

**学习目标：**
- 熟练使用MySQL数据库
- 掌握主流持久层框架
- 理解缓存和NoSQL应用场景

---

#### 阶段四：企业级框架（8-12周）

**核心内容：**
- Spring生态系统
  - Spring Core（IoC、AOP）
  - Spring Boot 3.x
    - 自动配置原理
    - Starter依赖管理
    - 配置文件管理
    - Actuator监控
  - Spring MVC
    - RESTful API设计
    - 请求处理流程
    - 数据验证
  - Spring Security 6.x
    - 认证与授权
    - JWT Token
    - OAuth 2.0

- 响应式编程
  - Spring WebFlux
  - Reactor框架
  - 响应式数据库访问

**学习目标：**
- 掌握Spring Boot快速开发
- 能够构建安全的REST API
- 理解响应式编程模型

---

### 1.2 核心技能树

```
Java工程师技能树
│
├── 编程语言
│   ├── Java 21核心特性
│   ├── 设计模式（23种）
│   └── 数据结构与算法
│
├── 数据库技术
│   ├── MySQL（主从复制、分库分表）
│   ├── Redis（缓存策略、集群）
│   ├── MongoDB
│   └── Elasticsearch
│
├── 框架技术
│   ├── Spring Framework
│   ├── Spring Boot 3.x
│   ├── Spring Cloud 2025
│   ├── MyBatis/JPA
│   └── Spring Security
│
├── 中间件
│   ├── 消息队列（RabbitMQ、Kafka、RocketMQ）
│   ├── 缓存（Redis、Caffeine）
│   ├── 搜索（Elasticsearch、Solr）
│   └── 任务调度（XXL-Job、Quartz）
│
├── 微服务架构
│   ├── 服务注册与发现（Nacos、Eureka）
│   ├── 配置中心（Nacos、Apollo）
│   ├── 服务网关（Spring Cloud Gateway）
│   ├── 负载均衡（Ribbon、LoadBalancer）
│   ├── 熔断降级（Sentinel、Resilience4j）
│   ├── 链路追踪（SkyWalking、Zipkin）
│   └── 分布式事务（Seata）
│
├── 性能优化
│   ├── JVM调优
│   ├── SQL优化
│   ├── 缓存优化
│   └── 并发优化
│
└── 工具链
    ├── 版本控制（Git）
    ├── 构建工具（Maven、Gradle）
    ├── CI/CD（Jenkins、GitLab CI）
    └── 容器化（Docker、Kubernetes）
```

---

### 1.3 进阶技术栈

#### 微服务架构（2025版）

**Spring Cloud 2025.0.0 "Northfields"**
- 完全兼容Spring Boot 3.5.0
- 核心组件：
  - Spring Cloud Gateway：API网关
  - Spring Cloud LoadBalancer：客户端负载均衡
  - Spring Cloud Circuit Breaker：熔断器
  - Spring Cloud Config：配置中心
  - Spring Cloud Stream：消息驱动

**阿里巴巴技术栈**
- Nacos：服务注册与配置中心
- Sentinel：流量控制与熔断降级
- RocketMQ：消息队列
- Seata：分布式事务
- Dubbo：RPC框架

#### 云原生技术

**容器化与编排**
- Docker容器技术
- Kubernetes集群管理
- Helm包管理
- Service Mesh（Istio）

**性能优化技术**
- 虚拟线程（Project Loom）
- GraalVM原生编译
- Jakarta EE标准

#### 分布式系统

**分布式理论**
- CAP定理
- BASE理论
- 一致性算法（Raft、Paxos）

**分布式组件**
- 分布式ID（Snowflake、美团Leaf）
- 分布式锁（Redis、Zookeeper）
- 分布式缓存
- 分布式存储

---

## 二、AI工程师技能树与学习路线

### 2.1 学习阶段规划

#### 阶段一：编程基础（4-6周）

**Python语言**
- Python语法基础
- 面向对象编程
- 常用标准库
- 虚拟环境管理（venv、conda）

**数据处理工具**
- NumPy：数值计算
- Pandas：数据分析
- Matplotlib/Seaborn：数据可视化
- Jupyter Notebook：交互式开发

**学习目标：**
- 熟练使用Python编程
- 掌握数据处理和可视化
- 能够进行数据探索性分析

---

#### 阶段二：数学基础（6-8周）

**线性代数**
- 向量与矩阵运算
- 特征值与特征向量
- 奇异值分解（SVD）
- 矩阵分解

**概率论与统计**
- 概率分布
- 贝叶斯定理
- 最大似然估计
- 假设检验

**微积分**
- 导数与偏导数
- 梯度与方向导数
- 链式法则
- 优化理论

**学习目标：**
- 理解机器学习的数学原理
- 能够推导基本算法公式
- 为深度学习打下数学基础

---

#### 阶段三：机器学习（8-12周）

**机器学习基础**
- 监督学习
  - 线性回归
  - 逻辑回归
  - 决策树
  - 随机森林
  - 支持向量机（SVM）
  - 梯度提升树（XGBoost、LightGBM）

- 无监督学习
  - K-Means聚类
  - 层次聚类
  - DBSCAN
  - 主成分分析（PCA）
  - t-SNE降维

- 模型评估
  - 交叉验证
  - 混淆矩阵
  - ROC曲线与AUC
  - 精确率、召回率、F1-Score

**常用库**
- Scikit-learn：机器学习算法库
- XGBoost/LightGBM：梯度提升算法

**学习目标：**
- 掌握主流机器学习算法
- 能够进行特征工程
- 理解模型评估方法
- 达到初级AI岗位要求（薪资15K-20K）

---

#### 阶段四：深度学习（10-16周）

**神经网络基础**
- 前向传播与反向传播
- 激活函数
- 损失函数
- 优化器（SGD、Adam等）
- 正则化（Dropout、BatchNorm）

**深度学习架构**
- 全连接神经网络（DNN）
- 卷积神经网络（CNN）
  - LeNet、AlexNet、VGG
  - ResNet、Inception
  - MobileNet、EfficientNet

- 循环神经网络（RNN）
  - LSTM、GRU
  - 序列到序列模型
  - 注意力机制（Attention）

- Transformer架构
  - Self-Attention机制
  - BERT、GPT系列
  - Vision Transformer（ViT）

**学习目标：**
- 深入理解神经网络原理
- 掌握主流深度学习架构
- 能够搭建和训练深度学习模型

---

#### 阶段五：专业方向（根据兴趣选择）

**计算机视觉（CV）**
- 图像分类
- 目标检测（YOLO、Faster R-CNN）
- 图像分割（U-Net、Mask R-CNN）
- 人脸识别
- 图像生成（GAN、Diffusion Models）

**自然语言处理（NLP）**
- 文本预处理
- 词嵌入（Word2Vec、GloVe）
- 语言模型（BERT、GPT、T5）
- 文本分类
- 命名实体识别（NER）
- 机器翻译
- 问答系统

**大语言模型（LLM）**
- GPT系列原理
- 提示工程（Prompt Engineering）
- 微调技术（Fine-tuning）
- RLHF（人类反馈强化学习）
- RAG（检索增强生成）
- LangChain框架

**学习目标：**
- 在特定领域深入研究
- 完成实战项目
- 达到高级AI岗位要求（薪资30K+）

---

### 2.2 核心技能树

```
AI工程师技能树
│
├── 编程能力
│   ├── Python（必须）
│   ├── C++（工程部署）
│   └── SQL（数据处理）
│
├── 数学基础
│   ├── 线性代数
│   ├── 概率论与统计
│   ├── 微积分
│   └── 最优化理论
│
├── 机器学习
│   ├── 监督学习算法
│   ├── 无监督学习算法
│   ├── 特征工程
│   ├── 模型评估与调优
│   └── XGBoost/LightGBM
│
├── 深度学习
│   ├── 神经网络基础
│   ├── CNN（计算机视觉）
│   ├── RNN/LSTM（序列模型）
│   ├── Transformer（NLP/Vision）
│   └── GAN/Diffusion（生成模型）
│
├── 深度学习框架
│   ├── PyTorch（推荐）
│   ├── TensorFlow
│   ├── Keras
│   └── JAX
│
├── 专业方向
│   ├── 计算机视觉
│   │   ├── 目标检测
│   │   ├── 图像分割
│   │   └── 图像生成
│   │
│   ├── 自然语言处理
│   │   ├── 文本分类
│   │   ├── 命名实体识别
│   │   ├── 机器翻译
│   │   └── 问答系统
│   │
│   └── 大语言模型
│       ├── 模型训练
│       ├── 模型微调
│       ├── 提示工程
│       └── RAG应用
│
└── 工程能力
    ├── 数据处理（ETL）
    ├── 模型部署（TorchServe、TensorFlow Serving）
    ├── GPU编程（CUDA）
    ├── 分布式训练（Horovod、DeepSpeed）
    └── MLOps（实验管理、模型监控）
```

---

### 2.3 深度学习框架

#### PyTorch（推荐）

**特点：**
- 动态计算图，灵活易用
- Pythonic风格，调试方便
- 学术界和工业界广泛使用
- 主流大语言模型（GLM、GPT、LLaMA）都基于PyTorch

**核心模块：**
- `torch.nn`：神经网络层
- `torch.optim`：优化器
- `torch.utils.data`：数据加载
- `torchvision`：计算机视觉
- `torchtext`：自然语言处理
- `torch.distributed`：分布式训练

**学习资源：**
- PyTorch官方教程
- 《动手学深度学习》（PyTorch版）
- 斯坦福CS231n、CS224n课程

---

#### TensorFlow

**特点：**
- 静态计算图（TensorFlow 1.x），TensorFlow 2.x引入动态图
- 工业部署成熟
- 强大的生态系统（TensorBoard、TF Lite、TF.js）

**核心模块：**
- `tf.keras`：高级API
- `tf.data`：数据管道
- `tf.estimator`：模型训练
- `TensorBoard`：可视化
- `TF Serving`：模型部署

**选择建议：**
- **学术研究、快速原型**：选择PyTorch
- **工业部署、移动端**：考虑TensorFlow
- **初学者**：建议从PyTorch开始
- **2025趋势**：PyTorch已成为主流，必须掌握

---

## 三、Linux运维基础知识

### 3.1 必备技能

#### 系统管理

**系统信息**
- 查看系统信息：`uname -a`、`hostnamectl`
- 查看CPU信息：`lscpu`、`cat /proc/cpuinfo`
- 查看内存信息：`free -h`、`cat /proc/meminfo`
- 查看磁盘信息：`df -h`、`lsblk`

**用户管理**
- 添加用户：`useradd`、`adduser`
- 修改密码：`passwd`
- 切换用户：`su`、`sudo`
- 用户组管理：`groupadd`、`usermod`

**进程管理**
- 查看进程：`ps aux`、`top`、`htop`
- 杀死进程：`kill`、`killall`、`pkill`
- 后台运行：`nohup`、`&`
- 进程监控：`systemctl`、`service`

**权限管理**
- 文件权限：`chmod`、`chown`、`chgrp`
- 特殊权限：SUID、SGID、Sticky Bit
- ACL权限：`setfacl`、`getfacl`

---

#### 网络管理

**网络配置**
- 查看IP：`ip addr`、`ifconfig`
- 配置网络：`nmcli`、`nmtui`
- 路由管理：`ip route`、`route`
- DNS配置：`/etc/resolv.conf`

**网络诊断**
- 连通性测试：`ping`、`traceroute`
- 端口扫描：`netstat`、`ss`、`lsof`
- 抓包分析：`tcpdump`、`wireshark`
- 域名解析：`nslookup`、`dig`、`host`

**防火墙**
- firewalld：`firewall-cmd`
- iptables：规则配置
- SELinux：安全策略

---

#### 服务管理

**Systemd管理**
```bash
systemctl start nginx      # 启动服务
systemctl stop nginx       # 停止服务
systemctl restart nginx    # 重启服务
systemctl status nginx     # 查看状态
systemctl enable nginx     # 开机自启
systemctl disable nginx    # 禁用自启
```

**常用服务**
- Web服务器：Nginx、Apache
- 数据库：MySQL、PostgreSQL、Redis
- 消息队列：RabbitMQ、Kafka
- 容器服务：Docker

---

### 3.2 常用命令

#### 文件操作命令

```bash
# 文件查看
ls -lah           # 列出文件详细信息
cat file.txt      # 查看文件内容
less file.txt     # 分页查看
head -n 20 file   # 查看前20行
tail -f logs.log  # 实时查看日志

# 文件搜索
find /path -name "*.log"           # 按名称查找
find /path -type f -mtime -7       # 查找7天内修改的文件
grep "error" file.log              # 搜索文件内容
grep -r "pattern" /path/           # 递归搜索

# 文件操作
cp source dest       # 复制文件
mv source dest       # 移动/重命名
rm -rf directory     # 删除目录
mkdir -p a/b/c       # 创建多级目录
touch newfile.txt    # 创建空文件

# 文件压缩
tar -czvf archive.tar.gz files/    # 压缩
tar -xzvf archive.tar.gz           # 解压
zip -r archive.zip files/          # zip压缩
unzip archive.zip                  # zip解压
```

---

#### 系统监控命令

```bash
# 系统资源
top               # 实时系统监控
htop              # 增强版top
vmstat 1          # 虚拟内存统计
iostat            # IO统计
sar               # 系统活动报告

# 磁盘管理
df -h             # 磁盘使用情况
du -sh *          # 目录大小
lsblk             # 列出块设备
fdisk -l          # 查看磁盘分区

# 内存管理
free -h           # 内存使用
sync              # 刷新文件系统缓存
echo 3 > /proc/sys/vm/drop_caches  # 清理缓存
```

---

#### 文本处理命令

```bash
# 文本查看
cat file.txt                    # 查看全部
head -n 10 file.txt            # 前10行
tail -n 10 file.txt            # 后10行
tail -f log.txt                # 实时查看

# 文本搜索
grep "pattern" file.txt        # 搜索
grep -v "pattern" file.txt     # 反向搜索
grep -i "pattern" file.txt     # 忽略大小写
grep -r "pattern" /path/       # 递归搜索

# 文本处理
sed 's/old/new/g' file.txt     # 替换文本
awk '{print $1}' file.txt      # 打印第一列
cut -d',' -f1 file.csv         # 按分隔符切割
sort file.txt                  # 排序
uniq file.txt                  # 去重
wc -l file.txt                 # 统计行数
```

---

#### Shell脚本基础

```bash
#!/bin/bash

# 变量定义
name="World"
echo "Hello, $name"

# 条件判断
if [ -f /etc/passwd ]; then
    echo "File exists"
fi

# 循环
for i in {1..5}; do
    echo "Number: $i"
done

# 函数
function greet() {
    echo "Hello, $1"
}
greet "User"

# 参数处理
echo "Script name: $0"
echo "First argument: $1"
echo "All arguments: $@"
echo "Number of arguments: $#"
```

---

#### 必学的150个命令（分类）

**文件管理（30个）**
```
ls, cd, pwd, mkdir, rmdir, cp, mv, rm, touch, cat, more, less,
head, tail, ln, find, locate, which, whereis, grep, wc, sort,
uniq, cut, paste, join, split, tar, gzip, zip, unzip
```

**系统管理（30个）**
```
ps, top, htop, kill, killall, nice, renice, bg, fg, jobs,
systemctl, service, cron, at, shutdown, reboot, halt, init,
uptime, who, w, last, history, date, cal, bc, man, info,
uname, hostname
```

**用户管理（15个）**
```
useradd, userdel, usermod, passwd, groupadd, groupdel,
groupmod, su, sudo, id, whoami, groups, chage, finger, w
```

**权限管理（10个）**
```
chmod, chown, chgrp, umask, chattr, lsattr, setfacl, getfacl,
stat, file
```

**网络管理（25个）**
```
ifconfig, ip, ping, traceroute, netstat, ss, lsof, telnet,
ssh, scp, rsync, wget, curl, ftp, nslookup, dig, host,
route, iptables, firewall-cmd, nc, tcpdump, nmap, arp, hostname
```

**磁盘管理（20个）**
```
df, du, fdisk, mkfs, mount, umount, fsck, dd, lsblk, blkid,
hdparm, parted, resize2fs, tune2fs, dumpe2fs, e2fsck, xfs_repair,
smartctl, iostat, iotop
```

**文本编辑（10个）**
```
vi, vim, nano, emacs, sed, awk, tr, diff, patch, echo
```

**包管理（10个）**
```
yum, dnf, apt, apt-get, dpkg, rpm, pip, npm, gem, mvn
```

---

## 四、DevOps与云原生技术

### 4.1 容器化技术

#### Docker

**核心概念**
- 镜像（Image）：应用程序及其依赖的只读模板
- 容器（Container）：镜像的运行实例
- 仓库（Registry）：存储和分发镜像

**常用命令**
```bash
# 镜像管理
docker pull nginx:latest           # 拉取镜像
docker images                      # 列出镜像
docker build -t myapp:1.0 .       # 构建镜像
docker push myapp:1.0             # 推送镜像
docker rmi image_id               # 删除镜像

# 容器管理
docker run -d -p 8080:80 nginx    # 运行容器
docker ps                          # 查看运行容器
docker ps -a                       # 查看所有容器
docker stop container_id           # 停止容器
docker rm container_id             # 删除容器
docker logs -f container_id        # 查看日志
docker exec -it container_id bash  # 进入容器

# 网络管理
docker network ls                  # 列出网络
docker network create mynet        # 创建网络

# 数据卷
docker volume ls                   # 列出数据卷
docker volume create myvolume      # 创建数据卷
```

**Dockerfile示例**
```dockerfile
FROM openjdk:21-jdk-slim
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

---

#### Kubernetes

**核心概念**
- Pod：最小部署单元
- Service：服务发现与负载均衡
- Deployment：应用部署管理
- ConfigMap/Secret：配置管理
- Ingress：HTTP路由
- PersistentVolume：持久化存储

**常用命令**
```bash
# 集群管理
kubectl cluster-info              # 集群信息
kubectl get nodes                 # 查看节点

# Pod管理
kubectl get pods                  # 查看Pod
kubectl describe pod pod-name     # 查看详情
kubectl logs pod-name             # 查看日志
kubectl exec -it pod-name -- bash # 进入Pod

# 部署管理
kubectl apply -f deployment.yaml  # 应用配置
kubectl get deployments           # 查看部署
kubectl scale deploy app --replicas=3  # 扩缩容
kubectl rollout status deploy app # 查看发布状态
kubectl rollout undo deploy app   # 回滚

# 服务管理
kubectl get services              # 查看服务
kubectl expose deploy app --port=80  # 暴露服务
```

**Deployment示例**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:1.0
        ports:
        - containerPort: 8080
```

---

### 4.2 CI/CD

#### 持续集成/持续部署

**工具链**
- Jenkins：开源自动化服务器
- GitLab CI：GitLab内置CI/CD
- GitHub Actions：GitHub工作流
- ArgoCD：GitOps持续部署
- Tekton：Kubernetes原生CI/CD

**典型流程**
```
代码提交 → 自动构建 → 单元测试 → 代码扫描 →
构建镜像 → 推送仓库 → 部署测试环境 → 集成测试 →
部署生产环境
```

**Jenkins Pipeline示例**
```groovy
pipeline {
    agent any
    stages {
        stage('构建') {
            steps {
                sh 'mvn clean package'
            }
        }
        stage('测试') {
            steps {
                sh 'mvn test'
            }
        }
        stage('Docker构建') {
            steps {
                sh 'docker build -t myapp:${BUILD_NUMBER} .'
            }
        }
        stage('部署') {
            steps {
                sh 'kubectl apply -f k8s/deployment.yaml'
            }
        }
    }
}
```

**GitHub Actions示例**
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up JDK 21
      uses: actions/setup-java@v3
      with:
        java-version: '21'
    - name: Build with Maven
      run: mvn clean package
    - name: Build Docker image
      run: docker build -t myapp:latest .
    - name: Push to Registry
      run: docker push myapp:latest
```

---

### 4.3 监控与日志

#### 监控系统

**Prometheus + Grafana**
- Prometheus：时序数据库，指标采集
- Grafana：可视化监控面板
- AlertManager：告警管理

**监控指标**
- 系统指标：CPU、内存、磁盘、网络
- 应用指标：QPS、响应时间、错误率
- JVM指标：堆内存、GC、线程数
- 业务指标：订单量、用户量

#### 日志管理

**ELK Stack**
- Elasticsearch：日志存储与搜索
- Logstash：日志收集与处理
- Kibana：日志可视化分析
- Filebeat：轻量级日志采集

**EFK Stack**
- Fluentd：替代Logstash，更轻量

---

## 五、学习资源推荐

### 5.1 Java学习资源

#### 在线教程
- [JavaGuide](https://javaguide.cn/) - Java学习路线，定期更新
- [廖雪峰Java教程](https://www.liaoxuefeng.com/wiki/1252599548343744) - 适合入门
- [菜鸟教程](https://www.runoob.com/java/java-tutorial.html) - 基础语法
- [黑马程序员](https://yun.itheima.com/subject/javamap/) - 视频教程

#### 书籍推荐
- 《Java核心技术（卷I、卷II）》- 经典入门书
- 《Effective Java》- Java最佳实践
- 《深入理解Java虚拟机》- JVM必读
- 《Java并发编程实战》- 并发编程圣经
- 《Spring Boot实战》- Spring Boot入门
- 《Spring Cloud微服务架构开发实战》- 微服务实践

#### 视频课程
- B站：尚硅谷、黑马程序员、动力节点
- 慕课网：Java工程师体系课
- 极客时间：《Java核心技术面试精讲》

---

### 5.2 AI学习资源

#### 在线课程
- [吴恩达机器学习](https://www.coursera.org/learn/machine-learning) - ML入门经典
- [吴恩达深度学习](https://www.coursera.org/specializations/deep-learning) - DL系统课程
- [斯坦福CS231n](http://cs231n.stanford.edu/) - 计算机视觉
- [斯坦福CS224n](http://web.stanford.edu/class/cs224n/) - 自然语言处理
- [Fast.ai](https://www.fast.ai/) - 实用深度学习

#### 书籍推荐
- 《机器学习》周志华 - 西瓜书
- 《统计学习方法》李航 - 理论基础
- 《深度学习》Ian Goodfellow - 花书
- 《动手学深度学习》- PyTorch/TensorFlow实战
- 《Python机器学习》- Scikit-learn实践

#### 开源项目
- [Ai-Learn](https://github.com/tangyudi/Ai-Learn) - 200+AI实战案例
- [机器学习100天](https://github.com/MLEveryday/100-Days-Of-ML-Code)
- [深度学习500问](https://github.com/scutan90/DeepLearning-500-questions)

#### 实战平台
- Kaggle - 数据科学竞赛
- 天池 - 阿里云AI竞赛
- 和鲸社区 - 数据分析学习
- Papers with Code - 论文+代码

---

### 5.3 Linux学习资源

#### 在线教程
- [菜鸟教程 - Linux](https://www.runoob.com/linux/linux-tutorial.html)
- [Linux命令大全](https://www.linuxcool.com/)
- [鸟哥的Linux私房菜](http://linux.vbird.org/)
- [Linux就该这么学](https://www.linuxprobe.com/)

#### 书籍推荐
- 《鸟哥的Linux私房菜》- 入门经典
- 《Linux命令行与Shell脚本编程大全》
- 《UNIX/Linux系统管理技术手册》
- 《深入理解Linux内核》- 进阶读物

#### 实践环境
- 虚拟机：VMware、VirtualBox
- 云服务器：阿里云、腾讯云（学生机）
- WSL2：Windows下的Linux子系统
- Docker容器：快速搭建Linux环境

---

### 5.4 DevOps学习资源

#### Docker
- [Docker官方文档](https://docs.docker.com/)
- 《Docker从入门到实践》
- 《Kubernetes权威指南》

#### Kubernetes
- [Kubernetes官方文档](https://kubernetes.io/zh-cn/docs/home/)
- [Kubernetes中文社区](https://www.kubernetes.org.cn/)
- 《Kubernetes in Action》

#### CI/CD
- Jenkins官方文档
- GitLab CI/CD文档
- 《持续交付：发布可靠软件的系统方法》

---

## 六、学习建议

### 6.1 学习方法

1. **理论+实践结合**
   - 不要只看不练，每学一个知识点都要动手实践
   - 通过项目巩固知识，从小项目开始

2. **循序渐进**
   - 按照路线图阶段性学习，不要贪多
   - 打好基础，再学习进阶内容

3. **输出倒逼输入**
   - 写技术博客记录学习过程
   - 参与开源项目，提升实战能力
   - 分享知识，教是最好的学

4. **持续学习**
   - 关注技术动态，学习新技术
   - 深入源码，理解框架原理
   - 阅读优秀代码，提升代码质量

---

### 6.2 职业发展路径

#### Java工程师

```
初级（0-2年）
  ↓
Java语法、集合、IO、多线程
Spring Boot基础开发
MySQL数据库操作
【薪资：8K-15K】

中级（2-5年）
  ↓
JVM原理与调优
Spring全家桶熟练使用
微服务架构实践
分布式系统开发
【薪资：15K-30K】

高级（5-8年）
  ↓
架构设计能力
高并发、高可用系统
技术选型与落地
团队技术指导
【薪资：30K-50K】

专家/架构师（8年+）
  ↓
系统架构设计
技术体系建设
技术团队管理
行业技术影响力
【薪资：50K+】
```

#### AI工程师

```
初级（0-2年）
  ↓
Python编程
机器学习算法
数据处理与分析
【薪资：10K-20K】

中级（2-5年）
  ↓
深度学习框架
CV/NLP专项能力
模型训练与优化
工程部署能力
【薪资：20K-35K】

高级（5-8年）
  ↓
算法创新能力
大模型应用
AI系统架构
论文发表能力
【薪资：35K-60K】

专家/科学家（8年+）
  ↓
前沿算法研究
AI产品落地
技术团队建设
行业影响力
【薪资：60K+】
```

---

### 6.3 面试准备

#### Java面试重点

**基础知识**
- Java核心语法
- 面向对象三大特性
- 集合框架原理
- 多线程与并发

**框架原理**
- Spring IoC与AOP原理
- Spring Boot自动配置
- MyBatis执行流程
- Spring Cloud组件

**数据库**
- MySQL索引原理
- 事务隔离级别
- SQL优化技巧
- Redis数据结构

**系统设计**
- 微服务架构设计
- 分布式系统设计
- 高并发解决方案
- 缓存设计

#### AI面试重点

**数学基础**
- 线性代数基本概念
- 概率论与统计
- 梯度下降原理

**机器学习**
- 常用算法原理
- 模型评估方法
- 过拟合与欠拟合
- 特征工程

**深度学习**
- 神经网络基础
- CNN/RNN/Transformer原理
- 损失函数与优化器
- 正则化技术

**项目经验**
- 项目背景与目标
- 数据处理流程
- 模型选择与优化
- 效果评估与部署

---

## 七、总结

这份学习路线图涵盖了Java工程师、AI工程师以及Linux运维的核心技能。建议：

1. **根据自己的方向选择重点学习内容**
   - 偏向后端开发：重点学习Java + 微服务 + 数据库
   - 偏向AI方向：重点学习Python + 机器学习 + 深度学习
   - 全栈发展：两者结合，Java作为后端，AI作为算法能力

2. **Linux和DevOps是通用技能**
   - 无论选择哪个方向，都需要掌握Linux基础
   - Docker和Kubernetes是现代开发必备

3. **持续学习，保持技术热情**
   - 技术更新快，要持续关注新技术
   - 多参与开源项目，多实践

4. **注重基础，不要急于求成**
   - 扎实的基础是进阶的前提
   - 深入理解原理比记忆API更重要

---

**祝你学习顺利，成为优秀的工程师！**

---

## 附录：常用技术网站

### 综合学习
- [GitHub](https://github.com/) - 开源代码托管
- [Stack Overflow](https://stackoverflow.com/) - 技术问答
- [掘金](https://juejin.cn/) - 技术社区
- [CSDN](https://www.csdn.net/) - 技术博客

### Java技术
- [Spring官网](https://spring.io/)
- [Baeldung](https://www.baeldung.com/) - Java教程
- [InfoQ](https://www.infoq.cn/) - 技术资讯

### AI技术
- [Papers with Code](https://paperswithcode.com/) - 论文+代码
- [机器之心](https://www.jiqizhixin.com/) - AI资讯
- [AI研习社](https://www.yanxishe.com/)
- [Hugging Face](https://huggingface.co/) - AI模型社区

### 云服务
- [阿里云](https://www.aliyun.com/)
- [腾讯云](https://cloud.tencent.com/)
- [AWS](https://aws.amazon.com/)
- [Azure](https://azure.microsoft.com/)

---

*最后更新：2025年11月*
*本文档将持续更新，欢迎补充和建议*
