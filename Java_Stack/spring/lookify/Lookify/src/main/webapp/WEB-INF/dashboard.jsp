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
<div>
<a href="/songs/new"">Add New</a>
<a href="/songs/topTen">Top Songs</a>
<form action="/dashboard">
<input type="text" name="name" placeholder="Search artist">
<button type="submit">Search Artist</button>
</form>

</div>
<div>
<h1>Dashboard</h1>
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
            <td><a href="/songs/${songs.id}"><c:out value="${songs.songName}"/></a></td>
            <td><c:out value="${songs.rating}"/><a href=""></a></td>
            <td><form action="/songs/${songs.id}" method="post">
    				<input type="hidden" name="_method" value="delete">
    				<input type="submit" value="Delete">
				</form>
			</td>
        </tr>
     </c:forEach>
	</tbody>
</table>
</div>

</body>
</html>