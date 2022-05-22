import styled from 'styled-components';
import {useState,useEffect} from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Card from '../Card';
import Pagination from '../../components/PaginationContainer/Pagination';


const QuestionContainer = styled.div`
   display:flex;
   justify-content:space-between;
   flex-direction:column;
   margin:5%;
`

const CardLink = styled.a`
text-decoration:none;`


function Questions(){

    const [loading,setLoading] = useState(false);
    const [questions,setQuestions] = useState([]);
    const router = useRouter();
    const [hasMore,setHasMore] = useState(false);
    const {page} = router.query



    useEffect(() =>{

        setLoading(true)
        async function fetchData(){


            let querys = page ? `page=${page}&`: ''

            const data = await fetch(
                `https://api.stackexchange.com/2.2/questions?${querys}5&order=desc&sort=activity&site=stackoverflow`);


        const result = await data.json()


        console.log(result)

        if(result){
            setQuestions(result.items);
            setLoading(false);
            setHasMore(result.has_more);
        }


        }


        fetchData()
    },[page])





    return(
        <QuestionContainer>
            <h2>Question</h2>

            {loading ? (
                <span>Loading....</span>
            ):(
                <div>
                    {
                        questions.map((question) => (
                        <>
                         <Link
                           key={question.question_id}
                           href={`/questions/${question.question_id}`}
                           passHref >
                        
                         <CardLink>
                         <Card
                             key={question.question_id}
                             title={question.title}
                             view={question.view_count}
                             answers={question.answer_count}
                            />
                         </CardLink>
                         </Link>

                   

                         </>
                        ))
                        
                    }
                      <Pagination currentPage={parseInt(page) || 1} hasMore={hasMore} />

                </div>
    )}
        </QuestionContainer>
    )
}


export default Questions