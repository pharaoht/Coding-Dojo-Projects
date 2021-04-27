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
     <h1>Edit an Idea</h1>
         <form:form action="/updateIdea/${idea.id }" method="post" modelAttribute="idea">
    	<form:input path="content" value="${idea.content }"/>
    	<form:errors path="content" class="text-danger" />
    	
    	<form:input path="creator" value="${idea.creator }" type="hidden"/>
    	<form:errors path="creator" class="text-danger"/>
    		
    	<form:input path="user" value="${currentuser.id }" type="hidden"/>
    	<form:errors path="user" class="text-danger"/>
      	<input type="submit" value="Add idea" class="btn btn-sm btn-primary" />
    </form:form>
 <form action="/delete/${idea.id}" method="post">
    <input type="hidden" name="_method" value="delete">
    <input type="submit" value="Delete">
</form>
</div>
</body>
</html>