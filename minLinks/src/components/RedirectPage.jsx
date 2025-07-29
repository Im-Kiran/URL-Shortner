// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

// function RedirectPage() {
//   const { shortUrl } = useParams();

//   useEffect(() => {
//     const fetchAndRedirect = async () => {
//       try {
//         const res = await fetch(`http://localhost:9191/${shortUrl}`);
//         if (res.redirected) {
//           window.location.href = res.url;
//         } else {
//           const url = await res.text();
//           window.location.href = url; // backend returns plain URL
//         }
//       } catch (err) {
//         alert("Short URL not found!");
//       }
//     };

//     fetchAndRedirect();
//   }, [shortUrl]);

//   return <p>Redirecting...</p>;
// }

// export default RedirectPage;
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function RedirectPage() {
  const { shortUrl } = useParams();

  useEffect(() => {
    // Let the browser follow the redirect directly
    window.location.href = `http://localhost:9191/${shortUrl}`;
  }, [shortUrl]);

  return <p>Redirecting...</p>;
}
export default RedirectPage;

