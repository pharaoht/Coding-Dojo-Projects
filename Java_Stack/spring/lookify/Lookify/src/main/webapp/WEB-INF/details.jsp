<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<a href="/dashboard"">Dashboard</a>
<h1>details</h1>
<h1><c:out value="${song.songName}"/></h1>
<p>By: <c:out value="${song.artistName}"/></p>
<p>Rating: <c:out value="${song.rating}"/></p>
<form action="/songs/${songs.id}" method="post">
    				<input type="hidden" name="_method" value="delete">
    				<input type="submit" value="Delete">
				</form></body>
</html>