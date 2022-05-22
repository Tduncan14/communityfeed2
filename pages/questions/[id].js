
import {useState,useEffect} from 'react';
import { useRouter } from "next/router";
import styled from 'styled-components';
import Link from 'next/link';
import Card from "../Card";




const QuestionDetailContainer = styled.div`
 display:flex;
 justify-content:space-between;
 flex-direction:column;
 margin:5%;`



function QuestionDetail (){

    const router = useRouter()
    const {id} = router.query;

    const [ loading,setLoading] = useState(false);
    const [question,setQuestion] = useState({});




    useEffect(() => {

        setLoading(true)
        async function fetchData(){

            const data = await fetch(
                `https://api.stackexchange.com/2.2/questions/${id}?site=stackoverflow`
            )


            const result =  await data.json()
            console.log(result)


            if(result){
                setQuestion(result.items[0]);
                setLoading(false);
            }
        }

          id && fetchData();


    },[])



    return(
        <QuestionDetailContainer>
            <h2>Question:{id}</h2>

            {
                loading ? (
                    <span> Loading...</span>
                ):(
                    <>
                    <Card 
                      title={question.title}
                      view={question.view_count}
                      answers={question.answers_count}/>

                      <Link
                      href={'/questions'}>
                          <button>back</button>
                    </Link>
                    </>
                )

                
        
   
            }
        </QuestionDetailContainer>
    )



}


export default QuestionDetail