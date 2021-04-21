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
<div>
<h1>Top Ten</h1>
<table>
	<thead>
		<tr>
		<td>Name</td>
		<td>Rating</td>
		<td>Actions</td>
		</tr>
	</thead>
	<tbody>
	<c:forEach items="${songs}" var="songs">
        <tr>
            <td><c:out value="${songs.songName}"/></td>
            <td><c:out value="${songs.artistName}"/></td>
            <td><c:out value="${songs.rating}"/></td>

        </tr>
     </c:forEach>
	</tbody>
</table>
</div>

</body>
</html>