import { Navigate } from 'react-router';
import {
  PromptsView,
  PromptForm,
  CreatePromptForm,
  EmptyPromptPreview,
} from '~/components/Prompts';
import DashboardRoute from './Layouts/Dashboard';

const dashboardRoutes = {
  // Changed from "path: 'd/*'" to just "path: 'd'"
  path: 'd',
  children: [
    {
      // The catch-all under "d" (i.e. "d/*")
      path: '*',
      element: <DashboardRoute />,
      children: [
        /*
        // Example code below shows how to split "files/*" or "vector-stores/*"
        // into a parent path (e.g. "files") with a child route path="*".
        // Uncomment and adjust as needed:

        {
          // If "FileDashboardView" was meant to handle an index route under /d:
          // (no path, just element), you could do something like:
          element: <FileDashboardView />,
          children: [
            {
              index: true,
              element: <EmptyVectorStorePreview />,
            },
            {
              path: ':vectorStoreId',
              element: <DataTableFilePreview />,
            },
          ],
        },
        {
          // from "path: 'files/*'" to this split approach
          path: 'files',
          children: [
            {
              path: '*',
              element: <FilesListView />,
              children: [
                {
                  index: true,
                  element: <EmptyFilePreview />,
                },
                {
                  path: ':fileId',
                  element: <FilePreview />,
                },
              ],
            },
          ],
        },
        {
          // from "path: 'vector-stores/*'" to this split approach
          path: 'vector-stores',
          children: [
            {
              path: '*',
              element: <VectorStoreView />,
              children: [
                {
                  index: true,
                  element: <EmptyVectorStorePreview />,
                },
                {
                  path: ':vectorStoreId',
                  element: <VectorStorePreview />,
                },
              ],
            },
          ],
        },
        */

        {
          // Split "prompts/*" => parent "prompts", child path="*"
          path: 'prompts',
          children: [
            {
              path: '*',
              element: <PromptsView />,
              children: [
                {
                  index: true,
                  element: <EmptyPromptPreview />,
                },
                {
                  path: 'new',
                  element: <CreatePromptForm />,
                },
                {
                  path: ':promptId',
                  element: <PromptForm />,
                },
              ],
            },
          ],
        },
        {
          // Catch-all route under "/d" if nothing else matches
          path: '*',
          element: <Navigate to="/d/files" replace={true} />,
        },
      ],
    },
  ],
};

export default dashboardRoutes;