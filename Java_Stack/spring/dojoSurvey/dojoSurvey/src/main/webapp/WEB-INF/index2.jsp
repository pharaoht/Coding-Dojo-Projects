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
<p>Submitted Info</p>
<c:out value="${name1}"/>
<p><c:out value="${location1}"/></p>
<p><c:out value="${favlang1}"/></p>
<p><c:out value="${comment1}"/></p>

</body>
</html>