const default_set={
    theme: "light",
    browser:"chrome"
};
const user={
    theme: "dark",
    browser:"chrome"
};
const final={...user,...default_set};
console.log(final);