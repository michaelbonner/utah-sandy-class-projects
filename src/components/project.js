import React from "react"
import Image from "../components/image"

const Project = ({ project }) => (
  <div key={project.title} className="px-3 pt-1 mb-6 w-full md:w-1/2 lg:w-1/3">
    <div className="flex overflow-hidden flex-col h-full bg-white rounded shadow-md">
      {project.image && (
        <a
          href={project.url}
          title={project.title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image alt={project.title} filename={project.image} />
        </a>
      )}
      <div className="flex flex-col flex-grow py-4 px-6">
        <div className="mb-2 text-xl font-bold">
          <a
            href={project.url}
            title={project.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
          </a>
        </div>
        <p className="text-base text-gray-700">{project.description}</p>
      </div>
      <div className="flex flex-wrap justify-between items-end py-4 px-2 bg-gray-200 shadow-inner xl:px-4">
        <a
          className={`flex justify-center items-center m-1 rounded border border-gray-400 hover:border-gray-400 bg-gray-100 hover:bg-white px-4 py-3 text-blue-700 uppercase text-sm${
            project.url ? "" : " hidden"
          }`}
          href={project.url}
          title={`View ${project.title} Project`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="inline-block mr-2 h-6 fill-current"
          >
            <path d="M352 442.2c-.3-2.2-2-3.9-4.2-4.3l-22.3-1.9c-11.8-3.1-20.5-16.2-22.3-28.3L302 400h-92l-1.2 7.6c-1.9 12.1-10.5 25.2-22.3 28.3l-22.3 1.9c-2.1.5-3.9 2.2-4.2 4.3-.4 3.1 2 5.8 5.1 5.8h181.8c3 .1 5.5-2.6 5.1-5.7zM472.9 71c-4.5-4.5-10.7-7-17-7H56.2c-6.4 0-12.5 2.5-17 7S32 81.7 32 88v272c0 6.4 2.7 12.5 7.2 17s10.5 7 16.8 7h400c6.4 0 12.3-2.5 16.8-7s7.2-10.7 7.2-17V88c.1-6.3-2.6-12.5-7.1-17zM256 360c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm203.9-40H52.2c-2.2 0-4-1.8-4-4V92c0-6.6 5.4-12 12-12h391.7c6.6 0 12 5.4 12 12v224c0 2.2-1.8 4-4 4z" />
          </svg>
          View Project
        </a>
        <div>
          <a
            aria-label="View project on GitHub"
            className={`m-1 hover:bg-gray-100 p-2 rounded-full text-gray-700 uppercase inline-block${
              project.github ? "" : " hidden"
            }`}
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
            title={`View ${project.title} on GitHub`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="inline-block h-6 fill-current"
            >
              <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
            </svg>
          </a>
          <a
            aria-label="View project presentation on YouTube"
            className={`m-1 hover:bg-gray-100 p-2 rounded-full text-red-700 uppercase inline-block${
              project.youtube ? "" : " hidden"
            }`}
            href={project.youtube}
            rel="noopener noreferrer"
            target="_blank"
            title={`View ${project.title} on YouTube`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="inline-block h-6 fill-current"
            >
              <path d="M508.6 148.8c0-45-33.1-81.2-74-81.2C379.2 65 322.7 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.6-.1 220.2 0 255.8c-.1 35.6 1 71.2 3.4 106.9 0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8 60.8.2 120.3-1 178.6-3.8 40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107 .2-35.6-.9-71.2-3.3-106.9zM207 353.9V157.4l145 98.2-145 98.3z" />
            </svg>
          </a>
          <a
            aria-label="Download project presentation video"
            className={`m-1 hover:bg-gray-100 p-2 rounded-full text-blue-700 uppercase inline-block${
              project.download ? "" : " hidden"
            }`}
            href={project.download}
            rel="noopener noreferrer"
            target="_blank"
            title={`Download ${project.title} Video`}
          >
            <svg
              className="inline-block h-6 fill-current"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M403.002 217.001C388.998 148.002 328.998 96 256 96c-57.998 0-107.998 32.998-132.998 81.001C63.002 183.002 16 233.998 16 296c0 65.996 53.999 120 120 120h260c55 0 100-45 100-100 0-52.998-40.996-96.001-92.998-98.999zM224 268v-76h64v76h68L256 368 156 268h68z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
)
export default Project
