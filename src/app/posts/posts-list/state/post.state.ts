export interface Post{
            id :number,
            title : string,
            description : string         
}

export interface PostState {
    posts : Post[];
}

export const initialState:PostState = {
    posts :[
        {id:1 , title: 'sample title 1', description: 'Sample Description' },
        {id:2 , title: 'sample title 2', description: 'Sample Description' },
    ]
}