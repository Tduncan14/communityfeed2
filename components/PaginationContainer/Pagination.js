import styled from 'styled-components';
import Link from 'next/link';



const PaginationContainer = styled.div`
 display:flex;
 justify-content:center;`





const PaginationLink = styled.a `
padding:2%;
margin:1%;
background:orange;
cursor:${(props) => (!props.disabled ? 'pointer' : 'not-allowed')}
pointer-events :${(props) => (!props.disabled ? 'all' : 'none') };
color:white;
background:${(props) => (!props.disabled ? 'orange' :'lightGrey')}
text-decoration:none;
border-radius:5px;`







function Pagination({currentPage,hasMore}){









 return(
     <PaginationContainer>
         <Link
          href={`?page=${parseInt(currentPage) - 1}`}><PaginationLink disabled={currentPage <= 1}>Previous</PaginationLink>
          </Link>


          <Link 
            href={`?page=${parseInt(currentPage + 1)}`}>
                <PaginationLink  disabled={!hasMore}>Next</PaginationLink>
            </Link>
     </PaginationContainer>
 )




}


export default Pagination;