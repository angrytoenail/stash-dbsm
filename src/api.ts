import type { MutationHookOptions } from "@apollo/client";

const api = window.PluginApi;
const { React, libraries, GQL } = api;
const Apollo = libraries.Apollo;

export { Apollo, GQL, React };
export default api;

const { gql, useMutation } = Apollo;
const defaultOptions = {};

