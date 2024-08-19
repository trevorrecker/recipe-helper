import React, { useState } from 'react';
import { Helmet } from 'react-helmet';



const LogInWithGoogle: React.FC = () => {
  const [renderGoogle] = useState<Boolean>(!document.getElementById('google-gsi-client'));
  

  return (
    <>
      <Helmet>
        {renderGoogle && <script id="google-gsi-client" src="https://accounts.google.com/gsi/client" async></script>}
      </Helmet>

      <div id="g_id_onload"
        data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
        data-context="use"
        data-ux_mode="redirect"
        data-login_uri={import.meta.env.VITE_GOOGLE_AUTH_REDIRECT}
        data-auto_prompt="false">
      </div>

      <div className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left">
      </div>
    </>
  );
};

export default LogInWithGoogle;