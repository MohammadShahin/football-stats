import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <React.Fragment>
      <Head>
        <title>About</title>
        <meta name="description" content="About this app" />
      </Head>

      <div className="text-column">
        <h1>About this app</h1>

        <p>
          This app was created as the final project of the Frontend Web
          Development course in Innopolis University. It is a simple web app
          built with Next JS. You can use this app to check out statistics about
          the top five European football leagues (England, Spain, Germany,
          Italy, and France). You can also check out a random football facts in
          the home page.
        </p>

        <p>
          Contributers:
          <ul>
            <li>
              Karam Shbib. <Link href="https://github.com/Karam19">Github</Link>
            </li>
            <li>
              Mohamad Dwik. <Link href="https://github.com/dwikov">Github</Link>
            </li>
            <li>
              Mohammad Shahin.{' '}
              <Link href="https://github.com/MohammadShahin">Github</Link>
            </li>
          </ul>
        </p>
        <Link href="https://www.flaticon.com/free-icons" title="icons">
          Flag icons credits
        </Link>
      </div>
    </React.Fragment>
  )
}
