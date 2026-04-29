"use client";

import { authClient } from "@/lib/auth-client";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { FiUser } from "react-icons/fi";

export function ModalTask() {

    const a = async (e) => {
        e.preventDefault()

        const name = e.target.name.value
        const image = e.target.image.value
        // console.log({name,url})

        await authClient.updateUser({
            name,
            image,
        })
    }

  return (
    <Modal>
      <Button variant="secondary"><BiEdit></BiEdit>Update Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FiUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update User</Modal.Heading>

            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={a} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField className="w-full" name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Enter your url" />
                  </TextField>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Save</Button>
            </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}