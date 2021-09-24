import { GetServerSideProps } from 'next'

export default function Posts() {
    return (
        <h1>Posts</h1>
    );
}

// export function getServerSideProps({session}):GetServerSideProps  {

//     var Brenno = 'Brenno';
//     return {Brenno}
// }