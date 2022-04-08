export const getBallotById = (ballots: any[], id: string) =>
  ballots.find((ballot) => ballot.id === id);

export const getNomineeById = (nominees: any[], id: string) =>
  nominees.find((nominee) => nominee.id === id);
