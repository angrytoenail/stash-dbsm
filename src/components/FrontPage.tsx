import api, { React } from "@/api.ts";

api.patch.instead(
  "FrontPage",
  function (props: object, _: object, original: any) {
    return (
      <>
        <p>Hello from Test React!</p>
        {original({ ...props })}
      </>
    );
  },
);
