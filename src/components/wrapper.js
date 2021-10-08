import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './wrapper.css';

function Wrapper () {
    // const [posts,setPosts] = useState('');
    // const [status,setStatus] = useState(false);
    // const [message,setMessage] = useState('');
    // function submitPosts(){
    //    axios
    //    .post("https://graph.facebook.com/104696141822154/feed?", {
    //        message:posts,
    //        access_token:"EAAExwALYfZAMBAEQAPzOL958VRP7VZCKZBMLzT6nicbzyxtqDC3FgxgzdpEdlQZCw3nUNbFoiSPPNxzkpAHyxxPrLUYzVIvdZCN1ifnpoAxZBEWkyuYrITkOtZByojqAcrFDwlHrZBDBcVhce3hDvTNFi9bGoZA0wFp0LM019n0ArZBwxnUZA4w3F33k9ZBxhWfo88SnQWT1Po5hWAZDZD" 
    //    })
    //    .then(
    //        res => {
    //         setStatus(true);
    //         console.log('%c Success','color:green')
    //         console.log(res.data);
    //         setStatus(true);
    //         setMessage('Successfully posted');
    //         setTimeout(() => {
    //             setStatus(false);
    //             setMessage('');
    //         },3000);
    //        }
    //    )
    //    .catch(err => {
    //     setStatus(true);
    //     console.log(`%cError`,'color:red');
    //     console.log(err);
    //     setMessage('Error occurred while posting');
    //     setTimeout(() => {
    //         setStatus(false);
    //         setMessage('');
    //     },3000);
    //    })
    // }
    // function submitPicture(){
    //     axios
    //     .post("https://graph.facebook.com/104696141822154/photos?", {
    //         url:"https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    //         access_token:"EAAExwALYfZAMBAEQAPzOL958VRP7VZCKZBMLzT6nicbzyxtqDC3FgxgzdpEdlQZCw3nUNbFoiSPPNxzkpAHyxxPrLUYzVIvdZCN1ifnpoAxZBEWkyuYrITkOtZByojqAcrFDwlHrZBDBcVhce3hDvTNFi9bGoZA0wFp0LM019n0ArZBwxnUZA4w3F33k9ZBxhWfo88SnQWT1Po5hWAZDZD" 
    //     })
    //     .then(
    //         res => {
    //          setStatus(true);
    //          console.log('%c Success','color:green')
    //          console.log(res.data);
    //          setStatus(true);
    //          setMessage('Successfully posted');
    //          setTimeout(() => {
    //              setStatus(false);
    //              setMessage('');
    //          },3000);
    //         }
    //     )
    //     .catch(err => {
    //      setStatus(true);
    //      console.log(`%cError`,'color:red');
    //      console.log(err);
    //      setMessage('Error occurred while posting');
    //      setTimeout(() => {
    //          setStatus(false);
    //          setMessage('');
    //      },3000);
    //     })
    // }
    const [post,setPost] = useState('')
    useEffect(() => {
        fetchPicture();
    })
    const fetchPicture = () => {
        setPost("https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80");

        axios.post(`https://graph.facebook.com/v12.0/oauth/access_token?  
        grant_type=fb_exchange_token&          
        client_id={app-id}&
        client_secret={app-secret}&
        fb_exchange_token={your-access-token`).then(res => {
            console.log(res.data);
            //setPost(res.data);
            
        }).catch(err => console.log(err))
    }
    return(
        <div class="dashboard">
            <div class="child1">
                <img src={post} alt="image not loading"/>
            </div>
            <br/>
        </div>
    )
}

export default Wrapper;