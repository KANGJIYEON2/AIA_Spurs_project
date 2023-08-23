import fs from "fs";
import Markdown from "markdown-to-jsx";
import path from 'path';
import matter from "gray-matter";

import {MDXRemote} from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join('faqs'))

    const paths = files.map(filename => ({
        slug: filename.replace('.md', '')
    }))

    return path;
    }
function getPost({slug}: {slug: string}){
    const markdownFile = fs.readFileSync(path.join('faqs', slug + '.md'), 'utf-8')
    const {data : frontMattter, content} = matter(markdownFile)
    return {
        frontMattter,
        slug,
        content
    }
}

export default function Page({ params } : any) {
    const props = getPost(params);

    return(
        <article>
            <h1>{props.frontMattter.title}</h1>
            <MDXRemote source={props.content} ></MDXRemote>
        </article>
    )

}

