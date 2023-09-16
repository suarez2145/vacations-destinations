// export let triggerObj = { dataTrigger: false };

export let toggleObj = {
    toggleState: true
};


export const toggleTrigger = () => {
    toggleObj.toggleState = !toggleObj.toggleState;
}