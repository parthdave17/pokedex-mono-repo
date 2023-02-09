const makeAPIcall = async (url: string) => {
  try {
    const res = await fetch(url);
    const resp = await res.json();
    if (res.status !== 200) {
      throw new Error("Error");
    }
    return resp;
  } catch (e) {
    throw new Error("Error");
  }
};

export default makeAPIcall;
