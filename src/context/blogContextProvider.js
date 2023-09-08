import { BlogContext } from "./blogContext";

export const BlogContextProvider = (props) => {
    return (
        <BlogContext.Provider value = {null}>
            {props.children}
        </BlogContext.Provider>
    );
}