<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
    <link rel="stylesheet" href="/webjars/bootstrap/4.5.0/css/bootstrap.min.css" />
    <script src="/webjars/jquery/3.5.1/jquery.min.js"></script>
    <script src="/webjars/bootstrap/4.5.0/js/bootstrap.min.js"></script>
<title>Insert title here</title>
</head>
<body>
  <div class="container">
  <a href="/newDojo">Add a dojo</a>
  <a href="/newNinja">Add a Ninja</a>
    <h1>Dojos</h1>
    <ul>
    <c:forEach items="${alldojos}" var="potato">
    	<li><a href="/showDojo/${potato.id}">${potato.name}</a></li>
    </c:forEach>
    </ul>
    
  </div>
</body>
</html>