export const metadata = {
   title: "Task-layout",
};

export default function RootLayout({ children }) {
   return (
      <html>
         <body>
            <h1>Este es el Layout</h1>
            {children}
         </body>
      </html>
   );
}
