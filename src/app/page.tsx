'use client'
import { Button, ButtonGroup, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Snippet, useDisclosure } from "@nextui-org/react";
import { Formik } from "formik";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [crush, setCrush] = useState('')

  return (
    <main className='h-screen w-screen overflow-hidden'>

      <div className='p-6 grid gap-2'>

        <h1 className='font-metafiz text-5xl'>Virtuship</h1>
        <p className='font-centra'>Ajak kencan gebetan anda dengan cara berbeda dan spesial</p>


        <Formik
          initialValues={{ crush: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              // alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <ButtonGroup>
                <Input
                  type="text"
                  name="crush"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  value={values.crush}
                  variant="bordered"
                  size="sm"
                />
                <Button onPress={onOpen} type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
                <Modal scrollBehavior='inside' isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">Your Virtuship is ready🎉</ModalHeader>
                        <ModalBody>
                          <p>now just copy the link and share with the person. don't shy and wish you all the best.</p>
                          <p>also you can take look from <Link className="underline text-sky-500" href={`/${values.crush}`}>here</Link> before sharing it</p>

                        </ModalBody>
                        <ModalFooter className="w-full">
                          <Snippet color="primary">virtuship.hasnat.fun/{values.crush}</Snippet>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </ButtonGroup>

            </form>
          )}
        </Formik>

      </div>
    </main>
  )
}
