<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<a href="/dashboard"">Dashboard</a>
<h1>add new</h1>
<form:form action="/create" method="post" modelAttribute="song">
    <p>
        <form:label path="songName">Song Name</form:label>
        <form:errors path="songName"/>
        <form:input path="songName"/>
    </p>
    <p>
        <form:label path="artistName">Artist</form:label>
        <form:errors path="artistName"/>
        <form:textarea path="artistName"/>
    </p>
    <p>
        <form:label path="rating">Rating</form:label>
        <form:errors path="rating"/>
        <form:select path="rating">
        	<form:option value="None" label="Select"></form:option>
        	<form:option value="1">1</form:option>
        	<form:option value="2">2</form:option>
        	<form:option value="3">3</form:option>
        	<form:option value="4">4</form:option>
        	<form:option value="5">5</form:option>
        	<form:option value="6">6</form:option>
        	<form:option value="7">7</form:option>
        	<form:option value="8">8</form:option>
        	<form:option value="9">9</form:option>
        	<form:option value="10">10</form:option>
        </form:select>
    </p>
  
    <input type="submit" value="Submit"/>
</form:form>    
</body>
</html>
