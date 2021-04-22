<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
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
    <h1>Create a Ninja</h1>
    <form:form action="/makeNinja" method="post" modelAttribute="addNinja">
    	<form:input path="firstName"/>
    	<form:errors path="firstName" class="text-danger" />
    	
    	<form:input path="lastName"/>
    	<form:errors path="lastName" class="text-danger" />
    	
    	<form:input type="number" path="age"/>
    	<form:errors path="age" class="text-danger" />
    	
    	<select name="dojo">
    		<c:forEach items="${alldojos}" var="potato">
    		<option value="${potato.id}">${potato.name}</option>
    		</c:forEach>
    	</select>
    		
      	<input type="submit" value="Add Ninja" class="btn btn-sm btn-primary" />
    </form:form>
</body>
</html>