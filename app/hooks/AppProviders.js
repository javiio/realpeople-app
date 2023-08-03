import React from 'react';
import { ProvideSurvey } from './useSurvey';
import { ProvideFirebase } from './useFirebase';
import { ProvideUser } from './useUser';
import { ProvideSections } from './useSections';
import { ProvideConfig } from './useConfig';
import { ProvideRoutine } from './useRoutine';
import { ProvideProducts } from './useProducts';
import { ProvideTrainings } from './useTrainings';
import { ProvideResources } from './useResources';
import { ProvideDialog } from './useDialog';

const AppProviders = ({ children }) => (
  <ProvideFirebase>
    <ProvideConfig>
      <ProvideDialog>
        <ProvideUser>
          <ProvideSections>
            <ProvideSurvey>
              <ProvideRoutine>
                <ProvideProducts>
                  <ProvideTrainings>
                    <ProvideResources>
                      {children}
                    </ProvideResources>
                  </ProvideTrainings>
                </ProvideProducts>
              </ProvideRoutine>
            </ProvideSurvey>
          </ProvideSections>
        </ProvideUser>
      </ProvideDialog>
    </ProvideConfig>
  </ProvideFirebase>
);

export default AppProviders;
