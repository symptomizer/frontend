import { gql, useQuery } from "@apollo/client";
import { Profile as ProfileQuery } from "./__generated__/Profile";

const PROFILE = gql`
  query Profile {
    me {
      name
      emailAddress
      imageURL
    }
  }
`;

type Profile = {
  loading: boolean;
  name?: string;
  emailAddress?: string;
  imageURL: string;
};

const DEFAULT_IMAGE_URL = `https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y`;

export const useProfile = (): Profile => {
  const { loading, error, data } = useQuery<ProfileQuery>(PROFILE);

  if (error) return { loading: false, imageURL: DEFAULT_IMAGE_URL };

  return {
    loading,
    name: data?.me?.name || undefined,
    emailAddress: data?.me?.emailAddress || undefined,
    imageURL: data?.me?.imageURL || DEFAULT_IMAGE_URL,
  };
};
