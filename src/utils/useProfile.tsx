import { gql, useQuery } from "@apollo/client";
import { Profile as ProfileQuery } from "./__generated__/Profile";

const PROFILE = gql`
  query Profile {
    me {
      id
      imageURL
    }
  }
`;

type Profile = {
  loading: boolean;
  id: string;
  imageURL: string;
};

const DEFAULT_IMAGE_URL = "https://symptomize.me/avatars/blackonwhite.png";

export const useProfile = (): Profile => {
  const { loading, error, data } = useQuery<ProfileQuery>(PROFILE);

  if (error)
    return { loading: false, id: "Error", imageURL: DEFAULT_IMAGE_URL };

  return {
    loading,
    id: data?.me?.id || "Loading...",
    imageURL: data?.me?.imageURL || DEFAULT_IMAGE_URL,
  };
};
