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
 <h1>Hello, ${loggedinuser.firstName}</h1>
    <a href="/logout">log out</a>
    <a href="/newIdea">Create an Idea</a>
    <div>
    	<table class="table">
    		<thead>
    			<tr>
    				<th scope="col">Idea</th>
    				<th scope="col">Created By:</th>
    				<th scope="col">Likes</th>
    				<th scope="col">Actions</th>
    			</tr>
    		</thead>
    		<tbody>
    			
    			    <c:forEach items="${allideas}" var="potato">
    			    <tr>
    			    	<td><a href="/showIdea/${potato.id}">${potato.content}</a></td>
    			    	 <td>${potato.creator}</td>
    			    	<td>0</td>
    			    	<td>0</td>
    				</tr>
    				</c:forEach>
    			
    		</tbody>
    	</table>
    </div>
</div>
</body>
</html>