import React from 'react';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import fs from 'fs'

const Faqpage = () => {
  const faqDir = "faqs";
  const files = fs.readdirSync(path.join(faqDir));
  const faqlist = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(faqDir, filename),'utf-8')

    const {data: frontMattter} = matter(fileContent);
    return {
      meta : frontMattter,
      slug: filename.replace('.md', '')
    }
  })
  return (
    <main>
      <h1>FAQ 게시판</h1>
<div>
    {faqlist.map(faq => (
      <Link href={'/faqs/' + faq.slug} passHref key={faq.slug}>
      <div>
        <div>
      <h3>
        {faq.meta.title}
      </h3>
          <p>{faq.meta.subtitle}</p>
        </div>
        <div>
        <p>{faq.meta.date}</p>

        </div>
      </div>
    </Link>

    ))}

    </div>

  </main>
  )

}
    


export default Faqpage;