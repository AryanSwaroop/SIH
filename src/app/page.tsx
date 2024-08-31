"use client";
import { Camera, LocationOn } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  FormControl,
  FormLabel,
  Input,
  styled,
  SvgIcon,
} from "@mui/joy";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function Page() {
  return (
    <div className="h-screen w-screen flex flex-col bg-slate-900">
      <Input
        placeholder="Your location"
        className="mt-10 self-center"
        endDecorator={
          <Button
            className=" size-8 rounded-full bg-white active:bg-gray-500 hover:bg-gray-200"
            variant="solid"
          >
            <LocationOn className="text-black" />
          </Button>
        }
        sx={{ width: "80%" }}
      />
      <div className="flex flex-col lg:flex-row lg:max-w-full max-h-full justify-evenly grow px-10 lg:px-48 ">
        <Button
          className="lg:size-96 self-center grid place-content-center bg-white rounded-3xl active:bg-slate-300 hover:bg-slate-100"
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
        >
          <div className="flex flex-col ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3/4 text-gray-700 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
            <div className="self-center text-gray-700 font-mono font-bold text-xl text-center">
              Upload Image
            </div>
          </div>
          <VisuallyHiddenInput type="file" />
        </Button>
        <Button
          className="lg:size-96 self-center grid place-content-center bg-white rounded-3xl active:bg-slate-300  hover:bg-slate-100"
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
        >
          <div className="flex flex-col ">
            <Camera className="size-3/4 text-gray-700 self-center" />
            <div className="self-center text-gray-700 font-mono font-bold text-xl text-center">
              Capture Image
            </div>
          </div>
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
    </div>
  );
}

export default Page;
