import SectionTitle from "../components/SectionTitle";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

const UserProfile = () => {
  const username = "hello";
  return (
    <>
      <div className="max-w-4xl lg:max-w-7xl mx-auto pt-4 px-4 sm:pt-6 lg:px-8">
        <div className="grid grid-cols-1 gap-1 justity-items-start">
          <div className="flex justify-between">
            <SectionTitle title={username} />
            <Dialog.Root>
              <Dialog.Trigger>
                <button>Edit Profile</button>
              </Dialog.Trigger>
              <Dialog.Overlay>
                <div>helo</div>
              </Dialog.Overlay>
              <Dialog.Content>
                <Dialog.Close>
                  <Cross1Icon />
                </Dialog.Close>
                <Dialog.Title>
                  <p>Title</p>
                </Dialog.Title>
                <Dialog.Description>
                  <p>
                    We live in a time where there are so many holidays! Many
                    times we forget to celebrate. So we'll build a holidays app
                    to create, show and delete our holidays, we'll also be able
                    to update whether or not we've celebrated the holiday
                  </p>
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Root>
          </div>
          <div className="pb-3 pt-2">
            <p className="text-red-600 text-lg">
              Email: <span className="font-semibold">hwersdf@gmiasld.com</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
