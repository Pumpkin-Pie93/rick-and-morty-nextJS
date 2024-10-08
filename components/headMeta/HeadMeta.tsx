import React from 'react';
import Head from "next/head";

type Head = {
  title:string
  description?:string

}

const HeadMeta = (props:Head) => {
  const{title, description} = props
  return (
	<Head>
	  <title>{title}</title>
	  {description && <meta name="description" content={description} />}
	  <meta name="viewport" content="width=device-width, initial-scale=1" />
	  <link rel="icon" href="/favicon.ico" />
	</Head>
  );
};

export default HeadMeta;