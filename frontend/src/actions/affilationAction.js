import {
  ALL_AFFILIATION_FAIL,
  ALL_AFFILIATION_REQUEST,
  ALL_AFFILIATION_SUCCESS,
  CLEAR_ERRORS,
  CREATE_AFFILIATION_FAIL,
  CREATE_AFFILIATION_REQUEST,
  CREATE_AFFILIATION_SUCCESS,
  DELETE_AFFILIATION_FAIL,
  DELETE_AFFILIATION_REQUEST,
  DELETE_AFFILIATION_SUCCESS,
  AFFILIATION_DETAILS_FAIL,
  AFFILIATION_DETAILS_REQUEST,
  AFFILIATION_DETAILS_SUCCESS,
  UPDATE_AFFILIATION_FAIL,
  UPDATE_AFFILIATION_REQUEST,
  UPDATE_AFFILIATION_SUCCESS,
} from "../constants/afilationConstants";

import axios from "axios";

// Get All Affiliations Data
export const allAffiliationAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_AFFILIATION_REQUEST });

    const { data } = await axios.get(`/api/v1/afiliations`);

    dispatch({
      type: ALL_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Affiliation Details
export const affiliationDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: AFFILIATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/afiliation/${id}`);

    dispatch({
      type: AFFILIATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AFFILIATION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Affiliation Action --Admin
export const createAffiliationAction = (newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/admin/afiliation/create`,
      newAffiliationData,
      config
    );

    dispatch({
      type: CREATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Affiliation --Admin
export const deleteAffiliationAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `/api/v1/admin/afiliation/${id}`,
      config
    );

    dispatch({
      type: DELETE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Affiliation --Admin
export const updateAffiliationAction = (id, newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/admin/afiliation/${id}`,
      newAffiliationData,
      config
    );

    dispatch({
      type: UPDATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};




















/// Extra Curriculum Activities   Actions 

// Get All Extra Data
export const allExtraAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_AFFILIATION_REQUEST });

    const { data } = await axios.get(`/api/v1/extra-activities`);

    dispatch({
      type: ALL_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Affiliation Details
export const extraDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: AFFILIATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/extra-activity/${id}`);

    dispatch({
      type: AFFILIATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AFFILIATION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Affiliation Action --Admin
export const createExtraAction = (newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/admin/extra-activity/create`,
      newAffiliationData,
      config
    );

    dispatch({
      type: CREATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Affiliation --Admin
export const deleteExtraAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `/api/v1/admin/extra-activity/${id}`,
      config
    );

    dispatch({
      type: DELETE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Affiliation --Admin
export const updateExtraAction = (id, newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/admin/extra-activity/${id}`,
      newAffiliationData,
      config
    );
 
    dispatch({
      type: UPDATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};












/// Instructional Activities   Actions

// Get All Instrutionals Data
export const allInstructionalAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_AFFILIATION_REQUEST });

    const { data } = await axios.get(`/api/v1/instrutionals`);

    dispatch({
      type: ALL_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Instrutionals Details
export const instrutionalsDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: AFFILIATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/instrutional/${id}`);

    dispatch({
      type: AFFILIATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AFFILIATION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Instrutional Action --Admin
export const createInstrutionalAction = (newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/admin/instrutional/create`,
      newAffiliationData,
      config
    );

    dispatch({
      type: CREATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete instrutional --Admin
export const deleteInstrutionalAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `/api/v1/admin/instrutional/${id}`,
      config
    );

    dispatch({
      type: DELETE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update instrutional --Admin
export const updateInstrutionalAction = (id, newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/admin/instrutional/${id}`,
      newAffiliationData,
      config
    );
 
    dispatch({
      type: UPDATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};
























/// Academic Support Activities   Actions  


// Get All Support Data
export const allSupportAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_AFFILIATION_REQUEST });

    const { data } = await axios.get(`/api/v1/supports`);

    dispatch({
      type: ALL_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Support Details
export const supportDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: AFFILIATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/support/${id}`);

    dispatch({
      type: AFFILIATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AFFILIATION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Support Action --Admin
export const createSupportAction = (newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/admin/support/create`,
      newAffiliationData,
      config
    );

    dispatch({
      type: CREATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Support --Admin
export const deleteSupportAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `/api/v1/admin/support/${id}`,
      config
    );

    dispatch({
      type: DELETE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Support --Admin
export const updateSupportAction = (id, newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/admin/support/${id}`,
      newAffiliationData,
      config
    );
 
    dispatch({
      type: UPDATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};


















































/// Feature Actions 

// Get All Feature Data
export const allFeatureAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_AFFILIATION_REQUEST });

    const { data } = await axios.get(`/api/v1/features`);

    dispatch({
      type: ALL_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Feature Details
export const featureDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: AFFILIATION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/feature/${id}`);

    dispatch({
      type: AFFILIATION_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AFFILIATION_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Feature Action --Admin
export const createFeatureAction = (newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "multipart/form-data" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/admin/feature/create`,
      newAffiliationData,
      config
    );

    dispatch({
      type: CREATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Feature --Admin
export const deleteFeatureAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `/api/v1/admin/feature/${id}`,
      config
    );

    dispatch({
      type: DELETE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Feature --Admin
export const updateFeatureAction = (id, newAffiliationData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_AFFILIATION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/admin/feature/${id}`,
      newAffiliationData,
      config
    );
 
    dispatch({
      type: UPDATE_AFFILIATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_AFFILIATION_FAIL,
      payload: error.response.data.message,
    });
  }
};

 