import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

import { post_Todo } from "../redux/actionType";

// use Reducer fun and initialState

const initialState = {
  title: "",
  description: "",
  date: new Date().toISOString().slice(0, 10),
  priority: "High",
  status: "Todo",
  owner: "",
};

//reducer

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "add_task":
      return {
        ...state,
        title: payload,
      };
    case "des":
      return {
        ...state,
        description: payload,
      };
    case "owner":
      return {
        ...state,
        owner: payload,
      };
    case "priority":
      return {
        ...state,
        priority: payload,
      };
    case "status":
      return {
        ...state,
        status: payload,
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const TodoInput = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // redux
  const dispatcher = useDispatch();

  const toast = useToast();

  const handleTask = () => {
    if (state.title === "" || state.owner === "" || state.description === "") {
      toast({
        title: "input field error",
        description: "please fill remaning inputs",
        status: "error",

        duration: 5000,
        isClosable: true,
      });
    } else {
      dispatcher(post_Todo(state));

      dispatch({ type: "reset" });
      toast({
        title: "Added",
        description: "Task has been added succesfully",
        status: "success",

        duration: 5000,
        isClosable: true,
      });

      onClose();
    }
  };
  

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Add New Todo
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Hey, Have a Nice Day</DrawerHeader>

          <DrawerBody>
            <Box>
              <Box marginBottom={"10px"}>
                <Input
                  value={state.title}
                  onChange={(e) =>
                    dispatch({ type: "add_task", payload: e.target.value })
                  }
                  placeholder="Add Task Here..."
                />
              </Box>
              <Box marginBottom={"10px"}>
                <Input
                  value={state.owner}
                  onChange={(e) =>
                    dispatch({ type: "owner", payload: e.target.value })
                  }
                  placeholder="Your Name"
                />
              </Box>
              <Box marginBottom={"10px"}>
                <Textarea
                  value={state.description}
                  onChange={(e) =>
                    dispatch({ type: "des", payload: e.target.value })
                  }
                  placeholder="Description"
                />
              </Box>
              <Flex marginBottom={"10px"} gap={"20px"}>
                <Box w={"50%"}>
                  <label htmlFor="">Task Priority</label>

                  <Select
                    onChange={(e) =>
                      dispatch({ type: "priority", payload: e.target.value })
                    }
                  >
                    <option value={"High"}>High</option>
                    <option value={"Medium"}>Medium</option>
                    <option value={"Low"}>Low</option>
                  </Select>
                </Box>

                <Box marginBottom={"10px"} w={"50%"}>
                  <label htmlFor="">Task Status</label>
                  <Select
                    onChange={(e) =>
                      dispatch({ type: "status", payload: e.target.value })
                    }
                  >
                    <option value={"Todo"}>Todo</option>
                    <option value={"In-Progress"}>In-Progress</option>
                    <option value={"Done"}>Done</option>
                    <option value={"Review"}>Review</option>
                  </Select>
                </Box>
              </Flex>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleTask} colorScheme="blue">
              ADD TASK
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default TodoInput;
