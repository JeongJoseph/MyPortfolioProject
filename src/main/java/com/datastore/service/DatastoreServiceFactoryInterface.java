package com.datastore.service;

import com.google.appengine.api.datastore.DatastoreService;

public interface DatastoreServiceFactoryInterface {
    public DatastoreService getDatastoreService();
}
