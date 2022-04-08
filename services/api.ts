const ok = (data = {}) => ({ ...data, ok: true });
const notOk = (data = {}) => ({ ...data, ok: false });

const get = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return ok(data);
  } catch (error) {
    console.error(error);
    return notOk();
  }
};

export const getBallots = async (): Promise<any> =>
  get("http://localhost:3000/api/ballots");
