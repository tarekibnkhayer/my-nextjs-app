

const page = ({params, searchParams}:{params:{id: string}, searchParams: {category: string}}, ) => {
    // console.log(params); 
    console.log(searchParams);
    return (
        <div>
            This is dynamic route under products page: {params.id}
            <h2>{searchParams?.category}</h2>
        </div>
    );
};

export default page;