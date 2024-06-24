async function datafetch(){
 const res = await fetch("https://jsonplaceholder.typicode.com/posts")
 if(!res.ok){
    throw new Error("error");
 }
 return res.json();
 
}    

type Post = 
    {
        userId:number;
        id:number;
        title:string;
        body:string
    }


async function FetchData() { 
    
    const data = await datafetch()
    console.log(data);
    
  return (
    <div>
        FetchData
        <br />
        {data.map((post:Post)=>{ 
            <div key={post.id}>
                <p>{post.title}</p>
            </div>
        })}
    </div>
  )
}

export default FetchData