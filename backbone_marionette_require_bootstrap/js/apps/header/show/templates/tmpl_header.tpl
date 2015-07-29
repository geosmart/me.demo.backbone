<div class="container-fluid">
    <!-- LOGO -->
    <div class="navbar-header">
        <a class="navbar-brand" href="#home">
            <img alt="<%= title%>" src="img/logo.png" />
        </a>
        <a class="navbar-brand" href="#home"><%= title %></a>
    </div>

    <!-- 导航功能模块 -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <!--居左-->
        <ul class="nav navbar-nav">
            <li><a href="#">功能模块 <span class="sr-only">测试</span></a></li>
            <li><a href="#">功能模块</a></li>
            <li class="dropdown active">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">开发者资源<span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu" id="ul-service">
                    <li><a href="#service/java" data-type="java">Java SDk</a></li>
                    <li class="divider"></li>
                    <li><a href="#service/rest" data-type="rest">REST API</a></li>
                </ul>
            </li>
        </ul>
        <!--查询模块-->
        <form class="navbar-form navbar-left" role="search">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="请输入......">
            </div>
            <button type="submit" class="btn btn-default">查询</button>
        </form>
        <!--居右-->
        <ul class="nav navbar-nav navbar-right">
            <li>
                <img src="img/head.png" style="margin-top:5px"/>
            </li>
            <li>
                <a href="#">用户中心</a>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">帮助与支持 <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="#">Google</a></li>
                    <li><a href="#">Bing</a></li>
                    <li><a href="#">Baidu</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
