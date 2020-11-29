import { NextApiRequest, NextApiResponse } from 'next';
import { Client, linkResolver } from 'prismic-configuration';

const Preview = async (req: NextApiRequest, res: NextApiResponse ) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await Client(req).getPreviewResolver(ref as string, documentId as string).resolve(linkResolver, "/");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }
  
  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}` });
  res.end();
}

export default Preview;