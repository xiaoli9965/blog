(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{461:function(t,s,e){"use strict";e.r(s);var a=e(34),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"一、docker安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一、docker安装"}},[t._v("#")]),t._v(" 一、Docker安装")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#yum更新到最新")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum update\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装yum-util提供的yum-config-mapper依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y yum-utils device-mapper-persistent-data lvm2\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置docker的yum源为阿里云")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#安装docker-ce")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" yum "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" docker-ce\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看docker -v 版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" -v\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置docker开机自动启动")]),t._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('\n#更改镜像,提升下载速度\nvim daemon.json \n#加入\n{\n- - "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn"]\n}\n#重启服务 \nsystemctl restart docker\n\n')])])]),e("h2",{attrs:{id:"二、docker-命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-命令"}},[t._v("#")]),t._v(" 二、docker 命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("查看状态")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl status doker")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("启动")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl state doker")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("停止")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl stop doker")])])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("重启")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("systemctl restart doker")])])])])]),t._v(" "),e("h3",{attrs:{id:"_1-镜像相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-镜像相关命令"}},[t._v("#")]),t._v(" 1. 镜像相关命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("查看镜像")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("docker images")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("搜索镜像")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("docker search 镜像名称")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("NAME")]),t._v(":镜像名称 "),e("br"),e("code",[t._v("DESCRIPTION")]),t._v(":镜像描述"),e("br"),e("code",[t._v("STARS")]),t._v(":好评度"),e("br"),e("code",[t._v("OFFICIAL")]),t._v(":是否是官方提供的"),e("br"),e("code",[t._v("AUTOMATED")]),t._v(":是否自动构建")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("拉取镜像")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("docker pull 镜像名称")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("例:"),e("code",[t._v("docker pull mysql:5.7")]),t._v(" 冒号后面可以加上标签号"),e("br"),t._v("例:"),e("code",[t._v("docker pull mysql")]),t._v(" 不加默认拉取最新的版本")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("删除镜像")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("docker rmi 镜像id")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("删除所有镜像 docker rmi  `docker images -q``(去掉最后一个符号)"),e("br"),t._v(" 删除镜像时有运行的容器的话需要先删除容器再删除镜像")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-容器相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-容器相关命令"}},[t._v("#")]),t._v(" 2. 容器相关命令")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("查看容器 docker ps 查看容器 ps 查看所有容器 ps -a")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("操作容器 docker 命令 容器名")]),t._v(" "),e("ul",[e("li",[t._v("启动 start")]),t._v(" "),e("li",[t._v("停止 stop")]),t._v(" "),e("li",[t._v("重启 restart")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("创建容器命令 docker run")]),t._v(" "),e("ul",[e("li",[t._v("一个-代表不用填参数,两个-表示必须要参数")]),t._v(" "),e("li",[t._v("-i 运行容器")]),t._v(" "),e("li",[t._v("-t 启动后进入容器客户端")]),t._v(" "),e("li",[t._v("--name 为容器命名 --name=sql5.7")]),t._v(" "),e("li",[t._v("-v 映射目录 $1宿主机目录:容器目录")]),t._v(" "),e("li",[t._v("-d 后台运行")]),t._v(" "),e("li",[t._v("-p 端口映射 $1宿主机端口 $2容器端口")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("进入容器 docker exec")]),t._v(" "),e("ul",[e("li",[t._v("例:docker exec -it mycentos /bin/bash")]),t._v(" "),e("li",[t._v("exit退出容器")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("退出容器 exit")]),t._v(" "),e("ul",[e("li",[t._v("例:#docker exec -it mycentos /bin/bash")]),t._v(" "),e("li",[e("h1",{attrs:{id:"exit退出容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exit退出容器"}},[t._v("#")]),t._v(" exit退出容器")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("文件拷贝 docker cp")]),t._v(" "),e("ul",[e("li",[t._v("拷入例:doker cp /opt/xxx.txt mycentos:/usr/local")]),t._v(" "),e("li",[t._v("$1宿主机文件 $2镜像名:目录")]),t._v(" "),e("li",[t._v("拷出例:doker cp mycentos:/usr/local /opt/xxx.txt")]),t._v(" "),e("li",[t._v("与拷入反着写即可 $1镜像名:目录 $2宿主机目录")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("查看容器参数 docker inspect 容器名")]),t._v(" "),e("ul",[e("li",[t._v("直接使用命令返回的JSON格式数据")]),t._v(" "),e("li",[t._v("格式化提取需要参数: docker inspect mycentos2 --format='{.NetworkSettings.IPAddress}'")])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("删除容器 docker rm 容器名")]),t._v(" "),e("ul",[e("li",[t._v("必须先停掉才能移除")])])]),t._v(" "),e("h3",{attrs:{id:"_3-2-守护式方式创建容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-守护式方式创建容器"}},[t._v("#")]),t._v(" 3.2 守护式方式创建容器")]),t._v(" "),e("p",[e("code",[t._v("创建后为后台方式运行,使用docker exec 进入到容器,exit退出容器后容器不会退出运行")])]),t._v(" "),e("p",[t._v("创建容器:"),e("code",[t._v("docker run -di --name=mycentos2 centos:7")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190414144127445.png",alt:"查看容器"}}),t._v("\n进入这个容器:"),e("code",[t._v("docker exec -it mycentos2 /bin/bash")])]),t._v(" "),e("h2",{attrs:{id:"三、docker应用部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三、docker应用部署"}},[t._v("#")]),t._v(" 三、docker应用部署")]),t._v(" "),e("h3",{attrs:{id:"_1-mysql部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-mysql部署"}},[t._v("#")]),t._v(" 1. mysql部署")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("#"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("\n拉取镜像\ndocker\npull\ncentos "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" centos7\n#"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("\n创建容器\ndocker\nrun "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" d "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" i"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("\nname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" demoMysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" p\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" e\n"),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MYSQL_ROOT_PASSWORD")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xiaoli\ncentos "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" mysql "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" centos7\n#"),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("\n查看状态\ndocker\nps\n")])])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190414152213580.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTQ3Mjc1,size_16,color_FFFFFF,t_70",alt:"测试连接"}})]),t._v(" "),e("h3",{attrs:{id:"docker-mysql-8版本部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-mysql-8版本部署"}},[t._v("#")]),t._v(" Docker Mysql：8版本部署")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull mysql\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run --name dockermysql  -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3306")]),t._v(":3306 -e "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MYSQL_ROOT_PASSWORD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v(" -d mysql\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##进入容器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it dockermysql "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##登录")]),t._v("\nmysql -u root -p\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##配置远程登录")]),t._v("\nuse mysql"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ngrant all privileges on *.* to "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" Host,User,plugin from user"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##修改Root登录验证")]),t._v("\nalter user "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'root'")]),t._v("@"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'%'")]),t._v(" identified with mysql_native_password by "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"_2-tomcat部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-tomcat部署"}},[t._v("#")]),t._v(" 2. tomcat部署")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.拉取镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull tomcat:7\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2.创建容器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("demoTomcat -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(":8080 -v /usr/local/webapps:/usr/local/tomcat/webapps tomcat:7\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3.访问测试")]),t._v("\nhttp://192.168.200.200:9000/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4.由于使用了 -v目录挂载 所以访问时出现404,这时需要在宿主机/usr/local/webapps/中添加应用")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190414153649219.png",alt:"在这里插入图片描述"}})]),t._v(" "),e("h3",{attrs:{id:"_3-nginx部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-nginx部署"}},[t._v("#")]),t._v(" 3. Nginx部署")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.拉取镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#2.创建容器")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("demoNginx -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(":80  nginx\n")])])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190414154300336.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTQ3Mjc1,size_16,color_FFFFFF,t_70",alt:"启动成功"}}),t._v("\n==容器部署成功了,如何将我们的页面部署到Nginx呢?==")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#3.进入容器中设置Nginx")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it demoNginx /bin/bash\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4 容器中:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v("  \t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" etc/nginx/  \t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#进入Nginx目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" nginx.conf\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看Nginx的配置文件 可以看到 include /etc/nginx/conf.d/*.conf;")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/nginx/conf.d/default.conf  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看conf.d下的配置文件 可以看到 root   /usr/share/nginx/html; 这条配置.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#4 退出容器,将我们的静态页面cp到 /usr/share/nginx/html/目录即可")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#在宿主机创建一个目录,并将静态页面放入次目录下")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/share/nginx/html/\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将目录CP到容器中")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" html  demoNginx:/usr/share/nginx/\n")])])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190414155940103.png",alt:"完成"}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"四、迁移与备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四、迁移与备份"}},[t._v("#")]),t._v(" 四、迁移与备份")]),t._v(" "),e("h3",{attrs:{id:"_1-容器保存为镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-容器保存为镜像"}},[t._v("#")]),t._v(" 1. 容器保存为镜像")]),t._v(" "),e("p",[e("code",[t._v("docker commit demoNginx nginx_20190414")]),t._v("\n运行这个新保存的镜像:\n"),e("code",[t._v("docker run -di --name=demoNginx2 -p 81:80 nginx_20190414")])]),t._v(" "),e("h2",{attrs:{id:"_2-镜像备份"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-镜像备份"}},[t._v("#")]),t._v(" 2. 镜像备份")]),t._v(" "),e("p",[e("code",[t._v("docker save -o nginx_20190414.tar nginx_20190414")])]),t._v(" "),e("h2",{attrs:{id:"_3-镜像恢复与迁移"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-镜像恢复与迁移"}},[t._v("#")]),t._v(" 3.镜像恢复与迁移")]),t._v(" "),e("p",[t._v("1.恢复之前先删除镜像跟容器\n"),e("code",[t._v("docker stop demoNginx2")]),t._v(" "),e("code",[t._v("docker rm demoNginx2")]),t._v(" "),e("code",[t._v("docker rmi nginx_20190414")]),t._v("\n2.恢复:\n"),e("code",[t._v("docker load -i nginx_20190414.tar")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"五、dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、dockerfile"}},[t._v("#")]),t._v(" 五、Dockerfile")]),t._v(" "),e("blockquote",[e("p",[t._v("介绍:由一系列的命令和参数构成的脚本,基于基础镜像创建一个新的镜像.")])]),t._v(" "),e("h3",{attrs:{id:"_1-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-常用命令"}},[t._v("#")]),t._v(" 1. 常用命令")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("作用")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("FROM 基础镜像:标签")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("定义基础镜像的名称和标签")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("MAINTAINER 名称")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("版权申明,申明镜像的创建者, 可以不写")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("ENV key value")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置环境变量 (可以写多条)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("RUN 命令")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("在运行时执行某一个命令,比如创建一个目录 (可以写多条)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("ADD 源目录/文件 目标目录/文件")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("将宿主机的文件复制到容器内,如果是压缩文件自动解压")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("COPY 源目录/文件 目标目录/文件")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("将宿主机的文件复制到容器内")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[e("code",[t._v("WORKDIR 目录")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设置容器工作目录,在登陆容器后默认进入此目录")])])])]),t._v(" "),e("h3",{attrs:{id:"_2-使用dockerfile构建一个镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用dockerfile构建一个镜像"}},[t._v("#")]),t._v(" 2. 使用dockerfile构建一个镜像")]),t._v(" "),e("p",[e("code",[t._v("使用基础镜像为 centos7 以构建JDK1.8为例")])]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.宿主机创建目录并放入JDK1.8")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /usr/local/docker-jdk8\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /usr/local/docker-jdk8\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 构建一个Dockerfile文件 必须叫这个名字")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" Dockerfile\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 构建  -t=构建后名称 .代表当前目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build -t"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jdk1.8'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.查看镜像  会发现多了一个 jdk1.8的镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" images\n\n")])])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190414165439237.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQwMTQ3Mjc1,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"六、创建docker私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#六、创建docker私有仓库"}},[t._v("#")]),t._v(" 六、创建Docker私有仓库")]),t._v(" "),e("blockquote",[e("p",[t._v("用于存放企业内部应用级的镜像")])]),t._v(" "),e("h3",{attrs:{id:"_1-创建私有仓库服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建私有仓库服务"}},[t._v("#")]),t._v(" 1. 创建私有仓库服务")]),t._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#1.拉取镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" pull registry\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.启动私有仓库")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run  -di --name"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("registry -p "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),t._v(":5000 registry\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 查看是否搭建成功")]),t._v("\n访问 http://192.168.200.200:5000/v2/_catalog 有返回证明成功\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.修改daemon.json配置文件 添加信任仓库地址")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/docker/daemon.json\n- - "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insecure-registries"')]),t._v(":"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://192.168.200.200:5000"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#重启docker服务")]),t._v("\nsystemctl restart "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v("\n")])])]),e("h3",{attrs:{id:"_2-上传镜像到私有仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-上传镜像到私有仓库"}},[t._v("#")]),t._v(" 2. 上传镜像到私有仓库")]),t._v(" "),e("p",[t._v("1.给需要上传的镜像打一个标签 标签名为 "),e("code",[t._v("私服IP:端口:镜像名")]),t._v(" "),e("code",[t._v("docker tag jdk1.8 192.168.200.200:5000/jdk1.8")]),t._v("\n2.上传到私有服务器\n"),e("code",[t._v("docker push 192.168.200.200:5000/jdk1.8")]),t._v("\n3.访问仓库是否已经存在列表中 "),e("code",[t._v("http://地址:端口/v2/_catalog")]),t._v("\n4.从私库下载 "),e("code",[t._v("docker pull 192.168.200.200:5000/jdk1.8")])])])}),[],!1,null,null,null);s.default=n.exports}}]);