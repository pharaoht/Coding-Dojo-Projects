<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form method="POST" action="/formpost">
    <label>Your name :<input type="text" name="name"></label>
    <label>Dojo Location: <input type="text" name="location"></label>
    <label>Favorite Language: <input type="text" name="favlang"></label>
    <label>Comment (Optional)</label>
    <textarea name="comment"></textarea>
    <button>Send</button>
</form>
</body>
</html>