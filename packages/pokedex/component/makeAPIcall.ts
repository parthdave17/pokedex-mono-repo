const makeAPIcall = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data);
    if (res.status !== 200) {
      throw new Error("Error");
    }
    return data;
  } catch (e) {
    throw new Error("Error");
  }
};

export default makeAPIcall;
